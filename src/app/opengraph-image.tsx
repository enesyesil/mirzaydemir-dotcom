import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Mirza Aydemir - MFin Candidate (Capital Markets)";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "4px solid #000",
                        padding: "40px 80px",
                        background: "white",
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 900,
                            letterSpacing: "-0.05em",
                            marginBottom: 20,
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Mirza Aydemir
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 600,
                            color: "#666",
                            marginBottom: 10,
                        }}
                    >
                        MFin Candidate (Capital Markets)
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            color: "#999",
                        }}
                    >
                        Financial Modeling • FP&A • Econometrics
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: 40,
                        fontSize: 20,
                        color: "#ccc",
                    }}
                >
                    mirzaydemir.com
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    );
}
