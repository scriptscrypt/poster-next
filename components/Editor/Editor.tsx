"use client";

import { createStore } from "polotno/model/store";
import Workspace from "polotno/canvas/workspace";
import { WorkspaceWrap } from "polotno";
import BottomBar from "@/components/Editor/Bottom/BottomBar";
import TopBar from "@/components/Editor/Top/TopBar";

export default function Editor() {
  const store = createStore();
  store.rulesVisible == true;
  const page = store.addPage();

  return (
    <>
      <div className="h-screen">
        <WorkspaceWrap>
          <TopBar />
          <Workspace
            store={store}
            backgroundColor="#fafafa"
            altCloneEnabled={true}
            pageBorderColor="#D6D6D6" // border around page
            activePageBorderColor="red" // border around active page. It will be used only if you have several pages. Otherwise just pageBorderColor will be used
            bleedColor="#D6D6D6" // color of the bleed area, when it is toggled with `store.toggleBleed()`
            // optionally you can change default padding around page content
            // you can set it to 0 if you want to have full width and height of the canvas
            paddingX={50}
            paddingY={50}
            pageControlsEnabled={false}

            // components={
            //   // you can add any components here

            // }
          />
          <BottomBar />
        </WorkspaceWrap>
      </div>
    </>
  );
}
