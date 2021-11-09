import React, { useEffect } from "react";
import "./dogCard.css";
import M from "materialize-css";

export default function DogCard({ dogImg }) {
  let inst;
  useEffect(() => {
    let el = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(el, {});
  }, []);
  let handleCopy = () => {
    navigator.clipboard.writeText(dogImg);
    M.toast({ html: "copied to clipboard" });
  };
  return (
    <div
      className="img-card hoverable tooltipped"
      data-position="top"
      data-tooltip="Click to copy image url"
      onClick={handleCopy}
    >
      <img src={dogImg} alt="dog" />
    </div>
  );
}
