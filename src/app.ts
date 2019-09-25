import { lightningChart, emptyFill, DataPatterns, Point, UILayoutBuilders, UIBackgrounds, UIOrigins, UIDraggingModes, SolidFill, ColorHEX, emptyLine, UIElementBuilders } from "@arction/lcjs"
import { createProgressiveTraceGenerator } from "@arction/xydata"

const dataAmount = 1.0 * 1000 * 1000
// Generate random data using 'xydata' library.
let data: Point[]
createProgressiveTraceGenerator()
    .setNumberOfPoints( dataAmount + 1 )
    .generate()
    .toPromise()
    .then((generatedData) => {
        data = generatedData
        measureRenderingSpeed()
    })

// Create Chart.
const chart = lightningChart().ChartXY()
    // Hide title.
    .setTitleFillStyle( emptyFill )
    // Minimize paddings.
    .setPadding({ left: 0, bottom: 0, right: 30, top: 10 })

// Disable scrolling animations to view loaded data instantly.
const axisX = chart.getDefaultAxisX()
    .setAnimationScroll( undefined )
const axisY = chart.getDefaultAxisY()
    .setAnimationScroll( undefined )

const series = chart.addLineSeries({
    // Specifying progressive DataPattern enables some otherwise unusable optimizations.
    dataPattern: DataPatterns.horizontalProgressive
})

const measureRenderingSpeed = () => {
    // Sync with next animation frame for correct time measurement.
    requestAnimationFrame(() => {
        // Measure time required to render supplied data.
        const tStart = window.performance.now()
    
        series.add( data )
    
        // Subscribe to next animation frame to know how long it took to render.
        requestAnimationFrame(() => {
            const tNow = window.performance.now()
            const delay = tNow - tStart
            // Display result using UI indicator.
            indicatorRenderingSpeed.setText(`${indicatorRenderingSpeedPrefix}: ${delay.toFixed(0)} ms`)
        })
    })
}

// Create indicator for displaying rendering speed.
const indicatorLayout = chart.addUIElement(
    UILayoutBuilders.Row
        .setBackground( UIBackgrounds.Rectangle ),
    // Position UIElement with Axis coordinates.
    {
        x: axisX.scale,
        y: axisY.scale
    }
)
    .setOrigin( UIOrigins.LeftTop )
    .setDraggingMode( UIDraggingModes.notDraggable )
    // Set dark, tinted Background style.
    .setBackground(( background ) => background
        .setFillStyle( new SolidFill({ color: ColorHEX('#000').setA(150) }) )
        .setStrokeStyle( emptyLine )
    )
// Reposition indicators whenever Axis scale is changed (to keep position static).
const repositionIndicator = () =>
    indicatorLayout.setPosition({ x: axisX.scale.getInnerStart(), y: axisY.scale.getInnerEnd() })
repositionIndicator()
axisX.onScaleChange( repositionIndicator )
axisY.onScaleChange( repositionIndicator )
// Rendering speed indicator.
const indicatorRenderingSpeedPrefix = `Rendering speed (${dataAmount} data-points)`
const indicatorRenderingSpeed = indicatorLayout.addElement( UIElementBuilders.TextBox )
    .setText( `${indicatorRenderingSpeedPrefix}: ...` )
    .setFont(( font ) => font
        .setWeight( 'bold' )
    )
