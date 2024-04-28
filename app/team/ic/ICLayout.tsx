import { Config } from "../../../types/ICPageConfig";

export default function ICLayout({ config }: { config: Config }) {
    return (
    <> 
        <section id="lead" className={"flex flex-col items-center pb-16 space-y-8 "}>
            <div className={"flex flex-col items-center space-y-8 p-8 w-2/5"}>
                <div className={"font-bold text-[48px]"}>{config["title"]}</div>
                <div className={"font-bold text-[20px]"}>{"Meetings: " + config["meetingTime"]}</div>
                <div className={"text-[16px] text-center font-light leading-relaxed"}>{config["description"]}</div>
            </div>

            <div className={"flex justify-center w-11/12"}>
                <div className={"h-min"}>
                    <img src={config["header"]["lead"]["image"]} alt="headshot of lead" className="max-h-144 rounded-xl"/>
                    <div className={"py-4"}>
                        <div className={"p-2 font-semibold text-[32px]"}>{config["header"]["lead"]["name"]}</div>
                        <div className={"p-2 font-light text-[16px]"}>{config["header"]["lead"]["email"]}</div>
                        <div className={"p-2 font-regular text-[24px]"}>{config["header"]["lead"]["title"]}</div>
                    </div>
                </div>
                <div className={"flex flex-col items-center basis-3/5 text-center"}>
                    <div className={"font-light leading-relaxed w-4/5 text-[22px]"}>{config["header"]["lead"]["quote"]}</div>
                    <img src={config["header"]["image"]} className={"p-4 w-3/5"}/>
                </div>
            </div>
        </section>
        <section id="gallery" className={"flex bg-[#212121] text-white w-full"}>
            <div id="projects" className={"flex flex-col justify-center w-2/3"}>
                <div className={"font-medium text-[36px] text-center h-min p-16"}>PROJECTS</div>
                <div id="projList" className={"grid grid-cols-2 gap-12 p-16 text-center place-items-center"}>
                    <div className={"w-2/3 leading-relaxed"}>
                        <h1 className={"font-medium text-[20px]"}>{config["projects"][0]["title"]}</h1>
                        <p className={"font-light text-[16px]"}>{config["projects"][0]["description"]}</p>
                    </div>
                    <div className={"w-2/3 leading-relaxed"}>
                        <h1 className={"font-medium text-[20px]"}>{config["projects"][1]["title"]}</h1>
                        <p className={"font-light text-[16px]"}>{config["projects"][1]["description"]}</p>
                    </div>
                    <div className={"w-2/3 leading-relaxed"}>
                        <h1 className={"font-medium text-[20px]"}>{config["projects"][2]["title"]}</h1>
                        <p className={"font-light text-[16px]"}>{config["projects"][2]["description"]}</p>
                    </div>
                    <div className={"w-2/3 leading-relaxed"}>
                        <h1 className={"font-medium text-[20px]"}>{config["projects"][3]["title"]}</h1>
                        <p className={"font-light text-[16px]"}>{config["projects"][3]["description"]}</p>
                    </div>
                </div>
            </div>
            <div id="projectPicture" className={"w-1/3"}>
                <img src={config["gallery"][0]["source"]} alt={config["gallery"][0]["alt"]} className="h-full"/>
            </div>
        </section>
        <section id="skills">
            <div id="skillDesc" className={"flex justify-around items-center text-center leading-relaxed p-8"}>
                <div className={"w-2/5"}>
                    <h1 className={"font-medium text-[20px]"}>{config["skills"]["title"]}</h1>
                    <p className={"font-light text-[16px]"}>{config["skills"]["description"]}</p>
                </div>
                <img src={config["skills"]["image"]} className={"w-1/3"}/>
            </div>
            <div id="newMemberDesc" className={"flex justify-around items-center text-center leading-relaxed p-8"}>
                <img src={config["newMembers"]["image"]} className={"w-1/3"}/>
                <div className={"w-2/5"}>
                    <h1 className={"font-medium text-[20px]"}>{config["newMembers"]["title"]}</h1>
                    <p className={"font-light text-[16px]"}>{config["newMembers"]["description"]}</p>
                </div>
            </div>
        </section>
    </>
    )
}
