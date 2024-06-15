import { Config } from "../../../types/ICPageConfig";

export default function ICLayout({ config }: { config: Config }) {
    return (
    <> 
        <section id="lead" className={"flex flex-col justify-center items-center pb-16 space-y-8 min-h-[100svh]"}>
            <div className={"flex flex-col items-center space-y-8 pt-24 pb-10 px-8"}>
                <div className={"font-bold text-[48px]"}>{config["title"]}</div>
                <div className={"font-bold text-[20px] text-center"}>{"Meetings: " + config["meetingTime"]}</div>
                <div className={"text-[16px] text-center font-light leading-relaxed max-w-4xl"}>{config["description"]}</div>
            </div>

            <div className="space-y-24">
                <div className={"flex justify-center items-center flex-col px-8 md:px-32 md:flex-row"}>
                    <div className="flex justify-center flex-col py-4">
                        <img src={config["header"]["lead"]["image"]} alt="headshot of lead" className="max-w-[300px] md:max-w-[400px]"/>
                        <div className={"py-4 text-center"}>
                            <div className={"p-2 font-semibold text-[32px]"}>{config["header"]["lead"]["name"]}</div>
                            <div className={"p-2 font-light text-[16px]"}>{config["header"]["lead"]["email"]}</div>
                            <div className={"p-2 font-regular text-[24px]"}>{config["header"]["lead"]["title"]}</div>
                        </div>
                    </div>
                    <div className={"flex flex-col items-center text-center gap-8"}>
                        {config?.header?.image && <img src={config["header"]["image"]} className={"p-4 w-full max-h-96 object-contain hidden md:w-3/5 md:max-w-4xl md:block"}/>}
                        <div className={"font-light leading-relaxed w-full text-lg md:w-4/5 md:text-lg"}>{config["header"]["lead"]["quote"]}</div>
                    </div>
                </div>
            </div>
            
        </section>
        <section id="gallery" className={"flex bg-[#212121] min-h-[100svh] text-white w-full flex-col md:flex-row"}>
            <div id="projects" className={"flex flex-col justify-center w-full md:w-2/3"}>
                <div className={"font-medium text-[36px] text-center h-min pt-16"}>PROJECTS</div>
                <div id="projList" className={"grid grid-cols-1 md:grid-cols-2 gap-12 py-16 px-8 md:p-16 text-center place-items-center"}>
                    <div className={"w-full md:w-2/3 leading-relaxed"}>
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
            <div id="projectPicture" className={"w-full min-h-128 md:max-h-full md:w-1/3"}>
                <img src={config["gallery"][0]["source"]} alt={config["gallery"][0]["alt"]} className="w-full h-full object-cover"/>
            </div>
        </section>
        <section id="skills" className="min-h-[100svh] flex flex-col justify-center items-center py-24">
            <div id="skillDesc" className={"flex justify-around flex-col md:flex-row items-center text-center leading-relaxed p-8"}>
                <div className={"w-full md:w-2/5"}>
                    <h1 className={"font-medium text-[20px]"}>{config["skills"]["title"]}</h1>
                    <p className={"font-light text-[16px]"}>{config["skills"]["description"]}</p>
                </div>
                <img src={config["skills"]["image"]} className={"h-128 w-128 object-contain md:w-1/3 md:h-full"}/>
            </div>
            <div id="newMemberDesc" className={"flex justify-around flex-col-reverse md:flex-row items-center text-center leading-relaxed p-8"}>
                <img src={config["newMembers"]["image"]} className={"h-128 w-128 object-contain md:w-1/3 md:h-full"}/>
                <div className={"w-full md:w-2/5"}>
                    <h1 className={"font-medium text-[20px]"}>{config["newMembers"]["title"]}</h1>
                    <p className={"font-light text-[16px]"}>{config["newMembers"]["description"]}</p>
                </div>
            </div>
        </section>
    </>
    )
}
