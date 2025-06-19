import React, { useState } from 'react'
import { Rings } from 'react-loader-spinner';

const Qrcode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("HelloWorld");
    const [size, setSize] = useState(150);

    async function generateQR() {
        // Clear previous QR & show loading
        setImg("");
        setLoading(true);

        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;

            await new Promise((resolve) => setTimeout(resolve, 500));


            setImg(url);
        } catch (error) {
            console.log("Error Generating QR code", error);
        } finally {
            setLoading(false);
        }
    }

    async function downloadQR() {
        fetch(img)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            })
            .catch((error) => {
                console.log("Error download QR code", error);
            });
    }

    return (
        <>
            <div className="stars"></div>
            <div className="App-Container" >

                <h1>QR CODE GENERATOR</h1>
                {loading && (
                    <div className="loader-container">
                        <Rings
                            height="80"
                            width="80"
                            color="#007bff"
                            ariaLabel="rings-loading"
                            visible={true}
                        />
                        <p>Please wait...</p>
                    </div>
                )}
                {!loading && img && <img src={img} className='qr-code-image' />}

                <div className='data-box'>
                    <div className="input-group">
                         <label>Data for QR code</label>
                        <input
                            type="text"
                            required
                            value={qrData}
                            onChange={(e) => setQrData(e.target.value)}
                        />
                       
                    </div>

                    <div className="input-group">
                        <label>Image size (e.g. 150)</label>

                        <input
                            type="text"
                            required
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />
                    </div>

                    <button className='Generate-button' disabled={loading} onClick={generateQR}>Generate QR Code</button>
                    <button className='Download-button' onClick={downloadQR}>Download QR Code</button>
                </div>
                <p className='footer'>
                    Designed by <b>Janani</b>
                </p>
            </div>
        </>
    )
}

export default Qrcode