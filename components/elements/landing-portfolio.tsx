export default function LandingPortfolio(){

    const items = [
        {
            name: "tech crunch",
            pic: "/assets/portfolio/p-tech.png"
        },
        {
            name: "wired",
            pic: "/assets/portfolio/p-wired.png"
        },
        {
            name: "google",
            pic: "/assets/portfolio/p-google.png"
        },
        {
            name: "facebook",
            pic: "/assets/portfolio/p-fb.png"
        },
        {
            name: "engadget",
            pic: "/assets/portfolio/p-engadget.png"
        },
        {
            name: "envato",
            pic: "/assets/portfolio/p-envato.png"
        },
        
    ]
    
    return (
        <section className="container flex flex-col gap-12 justify-center items-center max-w-[600px] py-20">
            <h4>Join over +15,000 happy clients!</h4>
       <div className="flex flex-wrap w-full justify-center gap-8">
       {items.length > 0 && items.map((d, i) => (
                <div key={i} className="w-42 overflow-hidden">
                    <img src={d.pic} alt={d.name} className="object-cover" />
                </div>
            ))}
       </div>
        </section>
    )
}