import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";
import MyGallery from "@/components/mygallery";
import MyProfile from "@/components/myprofile";
import MyProfileV2 from "@/components/myprofilev2";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <h1>Ilmuwan yang luar biasa</h1>
      </div>
      <div className="grid justify-between">
        {/* <Gallery />
        <hr />
        <TodoList />
        <hr />
        <MyGallery />
        <hr />
        <MyProfile /> */}
        <MyProfileV2 />
      </div>
    </main>
    
  );
}
