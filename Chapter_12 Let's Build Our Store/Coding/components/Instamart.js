import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible, removeIsVisible}) => {

    return (
        <div className="section">
            <h3>{title}</h3>
            {isVisible ? (
                <button onClick={(val=false) => removeIsVisible()}>hide</button>
            ) : (
                <button onClick={() => setIsVisible()}>show</button>
            )}
            {isVisible && <p>{description}</p>}

        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("team");
    return (
        <>
            <h1>Instamart</h1>
            <Section 
                title={"About Instamart"} 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eos dicta inventore sunt omnis, repellendus quas vel accusantium unde debitis quae. Reprehenderit ab illo est cumque nulla accusamus officiis temporibus, dolores corporis. Unde vero aliquam nisi inventore? Nam earum, nemo possimus blanditiis adipisci ipsa culpa corporis, sapiente, unde ipsum veritatis?" 
                isVisible={visibleSection === "about"} 
                setIsVisible={() => setVisibleSection("about")} 
                removeIsVisible={() => setVisibleSection("")}
                />
            <Section 
                title={"Team Instamart"} 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eos dicta inventore sunt omnis, repellendus quas vel accusantium unde debitis quae. Reprehenderit ab illo est cumque nulla accusamus officiis temporibus, dolores corporis. Unde vero aliquam nisi inventore? Nam earum, nemo possimus blanditiis adipisci ipsa culpa corporis, sapiente, unde ipsum veritatis?"
                isVisible={visibleSection === "team"} 
                setIsVisible={() => setVisibleSection("team")}
                removeIsVisible={() => setVisibleSection("")}
                />
            <Section 
                title={"career Instamart"} 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eos dicta inventore sunt omnis, repellendus quas vel accusantium unde debitis quae. Reprehenderit ab illo est cumque nulla accusamus officiis temporibus, dolores corporis. Unde vero aliquam nisi inventore? Nam earum, nemo possimus blanditiis adipisci ipsa culpa corporis, sapiente, unde ipsum veritatis?"
                isVisible={visibleSection === "career"} 
                setIsVisible={() => setVisibleSection("career")}
                removeIsVisible={() => setVisibleSection("")}
            />
        </>
    )
}

export default Instamart;