import CopyEmailButton from "../components/CopyEmailButton";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";


const About = () => {
  return (
    <section id="about" className="c-space section-spacing scroll-mt-28 md:scroll-mt-36">
        <h2 className="[font-family:nebulax] Biggesthead text-center">ABOUT ME</h2>
        <div className="grid grid-cols-1 gap-4 mt-12 relative">
            {/* background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl -z-10"></div>
            
            {/*G1*/}
            <div className="flex items-end grid-default-color p-0 h-[25rem] md:h-[30rem] relative overflow-hidden rounded-2xl">
              <img
                src="assets/yay.jpg"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="z-10 p-6">
                <p className="headtext [font-family:nebulax] text-shadow-2xs">Hi, I'm Hishirusai </p>
                <p className="subtext [font-family:montlight] text-5xl font-medium text-neutral-100">
                  I design and build front-end websites and art illustrations, two separate skills that give me both technical and artistic expression with the flexibility to merge them.
                </p>
              </div>
              <div className="absolute inset-x-0 pointer-evets-none -bottom-2 h-2/3 sm:h-2/3 bg-gradient-to-t from-black" />
            </div>

            {/*G2-4*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/*G2*/}
              <div className="grid-blue-color h-[15rem] relative overflow-hidden rounded-2xl p-6">
                <div className="z-10 w-[50%]">
                <p className="headtext [font-family:nebulax]">9PM TO 5AM (PHT/UTC+8)</p>
                <p className="subtext">
                I'm based in PH, and open to remote work worldwide
                </p>
              </div>
              <figure className="absolute left-[30%] top-[10%]">
              <Globe />
              </figure>
              </div>
              
              {/*G3*/}
              <div className="grid-reddish-color h-[15rem] relative overflow-hidden rounded-2xl p-6">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                  <p className="text-center headtext">
                    Do you want to start a project together?
                  </p>
                  <CopyEmailButton />
                </div>
              </div>

              {/*G4*/}
              <div className="grid-blue-color h-[15rem] relative overflow-hidden rounded-2xl p-6">
                <figure className="absolute left-[12%] top-[12%] md:scale-100">
                  <Frameworks 
                    outerRadius={120} 
                    innerRadius={60} 
                    outerIconSize={32} 
                    innerIconSize={15} 
                  />
                </figure>
                <div className="z-10 w-[50%] ml-auto text-right">
                  <p className="headtext [font-family:nebulax]" >Stacks and Arts</p>
                  <p className="subtext">
                    I specialize in a variety of languages, frameworks, and also different art tools
                  </p>
                </div>
              </div>

            </div>

            {/*G5*/}
            <div className="grid-black-color h-[20rem] relative overflow-hidden rounded-2xl p-6">
            
            <img
            src="assets/coding-pov.png"
            className="absolute z-0 scale-[1.75] -right-[5rem] -top-[6rem] md:scale-[1] md:left-80 md:-top-50 lg:scale-[1.25]"
            />

            <div className="relative z-10">
            <p className="Biggertext [font-family:nebulax]">
            THE ARTISTICALLY <br /> TECHNICAL DREAM
            </p>
            <p className="subtext">
              I used to be the person who was drawn to artworks and <br />
              website designs, never imagining I’d make them myself. <br />
              Over time, that curiosity pulled me deeper. I started <br />
              learning and experimenting, and now, I'm creating the <br />
              very things I once admired. <br /> <br />
              My journey shows inspiration can turn into creation.
            </p>
            </div>

            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
            </div>

            
            {/* Cards acting as buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              
              <a href="#frontend" className="grid-blue-color group relative overflow-hidden flex items-center justify-between rounded-2xl p-6 hover:-translate-y-1 duration-200" role="button" aria-label="Go to Front End Development section">
                <div className="relative z-10">
                  <p className="headtext [font-family:nebulax]">Front End Development</p>
                  <p className="subtext">Explore my front-end work</p>
                </div>

                 <img
                  src="./assets/CodeLink.png"
                  alt="Code preview"
                  className="absolute inset-y-0 right-0 h-full w-1/2 object-cover"
                  style={{ WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)", maskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
                />
              </a>

              <a href="#art" className="grid-red-color group relative overflow-hidden flex items-center justify-between rounded-2xl p-6 hover:-translate-y-1 duration-200" role="button" aria-label="Go to Art Illustrations section">
                <div className="relative z-10">
                  <p className="headtext [font-family:nebulax]">Art Illustrations</p>
                  <p className="subtext">See my illustration pieces</p>
                </div>
                
                <img
                  src="./assets/ArtLink.png"
                  alt="Art preview"
                  className="absolute inset-y-0 right-0 h-full w-1/2 object-cover"
                  style={{ WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)", maskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
                />
              </a>

            </div>

        </div>
        
    </section>
  )
}

export default About