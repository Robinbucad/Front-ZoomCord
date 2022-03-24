import { SocketContext } from "./videoContext";
import {io} from 'socket.io-client';
import Peer from 'simple-peer'
import { useState,useEffect, useRef, useContext } from "react";
import { UserContext } from "../user/user.contex";
import { HourglassBottom } from "react-bootstrap-icons";


const socket = io('http://localhost:4000');
const ContextProvider = ({ children }) => {

  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name,setName] = useContext(UserContext);

 
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');


  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  // const myStream = useRef()

  useEffect(() => { // PIDO PERMISOS PARA PEDIR LA CAMARA
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream; //ESTO LO PASARE A LA ETIQUETA VIDEO PARA QUE SE MUETRE
      });

    socket.on('me', (id) => setMe(id)); // RECUPERO MI ID

    socket.on('callUser', ({ from, name: name, signal }) => { // LLAMO AL USUARIO PASANDOLE MI ID, NOMBRE Y LA SEÑAL Y LA GUARDO EN UN ESTADO
      setCall({ isReceivingCall: true, from, name: name, signal });
    });
  }, []);

  
  // const shareScreen = (id) => {
  //     navigator.mediaDevices.getDisplayMedia({
  //       video:{mediaSource:'screen'}
  //     })
  //     .then((screen) => {
    
  //       myStream.current.srcObject = screen
  //     }) 
  //     const peer = new Peer({ initiator: true, trickle: false, stream });
  //     console.log(stream)
  //     socket.on('me',(id) => setMe(id))
      
  //     peer.on('signal', (data) => {
  //       socket.emit("shareScreen", {signal:data, to: call.from});
  //     });
  
  // }

  const answerCall = () => { // EL USUARIO ACEPTA LA LLAMADA Y RECOGE LOS DATOS ANTERIORES
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };


  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
     setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
     // shareScreen,
      // myStream
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default ContextProvider