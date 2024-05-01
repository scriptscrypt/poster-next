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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const BottomBar = () => {
  return (
    <>
      <div className="flex justify-between p-2 items-center h-[88px] overflow-x-scroll">
        <div className="border border-[#D6D6D6] h-[72px] rounded-3xl">undo</div>
        <Popover>
          <div className="border border-[#D6D6D6] h-[72px] rounded-3xl flex items-center align-middle gap-2 justify-between p-[8px]">
            <div className="hover:bg-[#F6F6F6] cursor-pointer selection:bg-[#DBCFFF] h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center ">
              <PopoverTrigger>
                <EditorIconPointer
                  width={40}
                  height={40}
                  strokeColor="#323232"
                />
              </PopoverTrigger>
            </div>

            <div className="hover:bg-[#F6F6F6] cursor-pointer h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
              <PopoverTrigger>
                <EditorIconUpload
                  width={40}
                  height={40}
                  strokeColor="#323232"
                />
              </PopoverTrigger>
            </div>

            <div className="hover:bg-[#F6F6F6] cursor-pointer h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
              <PopoverTrigger>
                <EditorIconNFTS width={40} height={40} strokeColor="#323232" />
              </PopoverTrigger>
            </div>

            <div className="hover:bg-[#F6F6F6] cursor-pointer h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
              <PopoverTrigger>
                <EditorIconTextCursor
                  width={40}
                  height={40}
                  strokeColor="#323232"
                />
              </PopoverTrigger>
            </div>

            <div className="hover:bg-[#F6F6F6] cursor-pointer h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
              <PopoverTrigger>
                <EditorIconTemplates
                  width={40}
                  height={40}
                  strokeColor="#323232"
                />
              </PopoverTrigger>
            </div>

            <div className="hover:bg-[#F6F6F6] cursor-pointer h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
              <PopoverTrigger>
                <EditorIconAIPanel
                  width={40}
                  height={40}
                  strokeColor="#323232"
                />
              </PopoverTrigger>
            </div>

            <div className="hover:bg-[#F6F6F6] cursor-pointer h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
              <PopoverTrigger>
                <EditorIconDraw width={40} height={40} strokeColor="#323232" />
              </PopoverTrigger>
            </div>

            <div className="hover:bg-[#F6F6F6] cursor-pointer h-[56px] w-[56px] rounded-2xl flex items-center align-middle justify-center text-center">
              <PopoverTrigger>
                <EditorIconShape width={40} height={40} strokeColor="#323232" />
              </PopoverTrigger>
            </div>
          </div>
          <PopoverContent className="rounded-3xl h-80 w-96">
            {" "}
            Section Contents
          </PopoverContent>
        </Popover>

        <div className="border border-[#D6D6D6] h-[72px] rounded-3xl"></div>
      </div>
    </>
  );
};

export default BottomBar;
