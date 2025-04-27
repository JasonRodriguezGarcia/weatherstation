import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField, Typography } from '@mui/material';
import "./font.css"

// const apiDevices = "http://localhost:5000/api/v1/devices"
const apiDevices = "https://weatherstation-hyck.onrender.com/api/v1/devices" // cambiar cuando tenga la web del deployment

function Device() {

    const [devices, setDevices] = useState([]);
    const [contador, setContador] = useState(0);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const goToCars = () => {
        navigate("/");
    }

    useEffect(()=> {
        const fetchDevices = async () => {
            try {
                const response = await fetch(`${apiDevices}`);
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("imprimo data: ", data)
                setDevices(data)
                console.log("imprimo devices: ", devices)

            } catch (error) {
                setError(error.message); // Handle errors
            } finally {
                // setLoading(false); // Set loading to false once data is fetched or error occurs
            }
        }
        fetchDevices()


    }, [contador])

    useEffect(() => {
        const intervalo = setInterval(() => {
          setContador(prev => prev + 1);
        }, 10000);
    
        // Limpieza al desmontar
        return () => clearInterval(intervalo);
      }, []);

  return (
    <div>
        <Box component="div" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h1">
                Weather station
            </Typography>
            {devices.length > 0 ?
                devices.map ((device, index) => (
                    <Box key={index} component="div" sx={{display: "flex", margin: "10px", border: "1px solid",
                            borderRadius: "10px", backgroundColor: "black", padding: "10px"}}>
                        <Box component="div"
                            sx={{display: "flex", width: "100%", flexDirection: "column", border: "1px solid",
                                backgroundColor: "blue", color: "white", padding: "20px",
                                
                            }}>
                                <Typography sx={{fontFamily: 'LcdDot', fontSize: "10px", lineHeight: "30px"}}>
                                    Device: {device.deviceMAC} 
                                </Typography>
                                <Typography sx={{fontFamily: 'LcdDot', fontSize: "10px", lineHeight: "30px"}}>
                                    Temperatura: {device.temperature} ºC
                                </Typography>
                                <Typography sx={{fontFamily: 'LcdDot', fontSize: "10px", lineHeight: "30px"}}>
                                    Humedad: {device.humidity} %
                                </Typography>
                        </Box>
                    </Box>      
                ))
            : <Typography>NO DEVICES AVAILABLE !!</Typography> }
        </Box>
    </div>
  );
}
export default Device;