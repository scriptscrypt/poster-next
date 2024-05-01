import {
  EditorIconAIPanel,
  EditorIconDraw,
  EditorIconNFTS,
  EditorIconPointer,
  EditorIconShape,
  EditorIconTemplates,
  EditorIconTextCursor,
  EditorIconUpload,
} from "@/assets/icons/EditorIcons";


const BottomBar = () => {
  return (
    <>
      <div className="flex justify-between p-2 items-center h-[88px] overflow-x-scroll">
        <div className="border border-[#D6D6D6] h-[72px] rounded-3xl">undo</div>
        <div className="border border-[#D6D6D6] h-[72px] rounded-3xl flex items-center align-middle gap-2 justify-between p-[8px]">
          <div className="hover:bg-[#F6F6F6] selection:bg-[#DBCFFF] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center ">
            <EditorIconPointer
              width={40}
              height={40}
              strokeColor="#323232"
            />
          </div>
          <div className="hover:bg-[#F6F6F6] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center" >
            <EditorIconUpload
              width={40}
              height={40}
              strokeColor="#323232"
            />
          </div>
          <div className="hover:bg-[#F6F6F6] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
            <EditorIconNFTS
              width={40}
              height={40}
              strokeColor="#323232"
            />
          </div>
          <div className="hover:bg-[#F6F6F6] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
            <EditorIconTextCursor
              width={40}
              height={40}
              strokeColor="#323232"
            />
          </div>
          <div className="hover:bg-[#F6F6F6] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
            <EditorIconTemplates
              width={40}
              height={40}
              strokeColor="#323232"
            />
          </div>
          <div className="hover:bg-[#F6F6F6] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
            <EditorIconAIPanel
              width={40}
              height={40}
              strokeColor="#323232"
            />
          </div>
          <div className="hover:bg-[#F6F6F6] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
            <EditorIconDraw
              width={40}
              height={40}
              strokeColor="#323232"
            />
          </div>
          <div className="hover:bg-[#F6F6F6] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
            <EditorIconShape
              width={40}
              height={40}
              strokeColor="#323232"
            />
          </div>
        </div>
        <div className="border border-[#D6D6D6] h-[72px] rounded-3xl"></div>
      </div>
    </>
  );
};

export default BottomBar;
