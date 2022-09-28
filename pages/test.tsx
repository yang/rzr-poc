import {TabButton, TabsContainer, TabUnderline} from "../components/Tabs";
import {DataCtxReader} from "@plasmicapp/host";

export default function Page() {
  return (
    <div>
      hello
      <TabsContainer initialKey={'a'}>
        <div className={'aa'}>
          <TabUnderline className={'underline'}/>
          <TabButton tabKey={"a"} >
            <button>Alpha</button>
          </TabButton>
          <TabButton tabKey={"b"} >
            <button>Beta</button>
          </TabButton>
        </div>
        <style>{`
        .underline {
          background: red;
          height: 2px;
        }
        .aa {
          display: flex;
          position: relative;
        }
        .in {
          opacity: 1;
          transform: translateY(0);
          transition: .2s ease all;
          transition-delay: .2s;
        }
        .out {
          opacity: 0;
          transform: translateY(200px);
          transition: .2s ease all;
        }
        `}</style>
        <div><DataCtxReader>
          {ctx =>
            <TabContents>
              <div className={ctx.currentTabKey === 'a' ? 'in' : 'out'}>alpha</div>
              <div className={ctx.currentTabKey === 'b' ? 'in' : 'out'}>beta</div>
            </TabContents>
          }
        </DataCtxReader></div>
      </TabsContainer>
    </div>
  );
}
