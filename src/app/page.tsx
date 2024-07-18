import { Acco } from "@/components/Acco";
import { Avata } from "@/components/Avata";
import Bread from "@/components/Bread";
import Butto from "@/components/Button";
import { Calenda } from "@/components/Calenderr";
import { CalendarForm } from "@/components/Date";
import { Dialog } from "@/components/Dialog";

import Image from "next/image";

export default function Home() {
  return (
   <div className=" w-full h-full item-center justify-center m-45 p-10">
    <Butto/>
    <Acco/>
    <div className=" mt-10 p-10">
    <Dialog/>
    </div>
    <Avata/>
    <Bread/>
    <Calenda/>
    <CalendarForm/>
   </div>
  );
}
