import ProgressiveImage from "react-progressive-graceful-image";

export default function App({ src, alt, placeholder, custom_class }) {
  return (

    <ProgressiveImage src={src} placeholder={placeholder}>
      {(src, loading) => (
        <img
          className={`${custom_class} image${
            loading ? " loading" : " loaded"
          }`}
          src={src}
          alt={alt}
        />
      )}
    </ProgressiveImage>

  );
}
