import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      {/**logoo */}
      <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
        <Link to="/">
          <span className="font-bold text-3xl letras">[siia]</span>
        </Link>

        {/**
         * 
        <span className="font-bold text-xl tracking-tight">x</span>
         */}
      </div>
    </>
  );
}

export default Logo;
