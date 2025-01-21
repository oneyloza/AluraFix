import { createContext, useContext, useState } from "react";

export const NuevoVideoContext = createContext();

NuevoVideoContext.displayName = "NuevoVideo";

export default function NuevoVideoProvider({ children }) {
  const [NuevoVideo, setNuevoVideo] = useState([]);

  return (
    <NuevoVideosContext.Provider value={{ NuevoVideo, setNuevoVideo }}>
      {children}
    </NuevoVideosContext.Provider>
  );
}

export function useNuevoVideosContext() {
  const { NuevoVideo, setNuevoVideo } = useContext(NuevoVideoContext);

  function agregarNuevoVideo(nuevoNuevoVideo) {
    const NuevoVideoRepetido = NuevoVideo.some(
      (item) => item.id === NuevoVideo.id
    );
    let nuevaLista = [...NuevoVideo];
    if (!NuevoVideoRepetido) {
      nuevaLista.push(NuevoVideo);
      return setNuevoVideo(nuevaLista);
    }

    nuevaLista = NuevoVideo.filter((item) => item.id !== NuevoVideo.id);
    return setNuevoVideo(nuevaLista);
  }
  return { NuevoVideo, agregarNuevoVideo };
}
