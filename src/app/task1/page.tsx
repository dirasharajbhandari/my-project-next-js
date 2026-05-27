"use client";
import React, { useState } from 'react'

function Page() {

    const [hoverRed, setHoverRed] = useState(false);
    const [hoverBlue, setHoverBlue] = useState(false);

  return (
    
    <div style={{backgroundColor:"white",margin:"0",padding:"2px",height:"1000px"}}>

        {/* heading */}
        <p style={{color:"#333333",marginLeft:"157px",marginTop:"53px",fontSize:"25px",width:"1045px"}}>Note: Hover the component to view the animation & Click the arrow icon</p>
        <p style={{color:"black",marginLeft:"120px",marginTop:"10px",fontSize:'20px'}}>Your SkillShikshya Journey</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p style={{color:"#1DA077",marginLeft:"120px",marginTop:"0px",fontSize:"25px"}}><strong>Step</strong></p>
            <p style={{color:"black",fontSize:"25px"}}><strong>In.</strong></p> 
            <p style={{color:"#1DA077",fontSize:"25px"}}><strong>Skill</strong></p>
            <p style={{color:"black"}}><strong>Up.</strong></p>
            <p style={{color:"#1DA077",fontSize:"25px"}}><strong>Stand</strong></p>
            <p style={{color:"black",fontSize:"25px"}}><strong>Out.🚀</strong></p>
        </div>

        {/* firstconatiner -red */}
        <div   
            onMouseEnter={() => setHoverRed(true)}
            onMouseLeave={() => setHoverRed(false)} 
            style={{backgroundColor:"#F45B5B",width:"592px",height:"341px",borderRadius:"30px",marginTop:"30px",marginLeft:"117px",transition:"0.5s", transform: hoverRed ? "translateX(-100px)" : "translateX(0px)"}}>

            {!hoverRed && (
            <>
                <img src="/image/ChatGPT Image May 27, 2026, 10_24_48 AM.png" style={{width:"470px",height:"420px",position:"absolute",marginLeft:"-130px",marginTop:"-20px"}}></img>
                <h1 style={{marginTop:"80px",marginLeft:"350px",gap:"32px",position:"absolute",fontSize:"27px",fontStyle:"normal"}}><strong>Start with Clarity</strong></h1>
                <p style={{marginTop:"130px",marginLeft:"280px",gap:"32px",position:"absolute",fontSize:"17px",fontStyle:"normal",wordSpacing:"5px"}}><strong>Step into a better learning path.</strong></p>

                <p
                    style={{
                    
                        position:"absolute",
                        width: "300px",
                        color: "white",
                        padding: "20px",
                        borderRadius: "4px",
                        textAlign: "right",
                        lineHeight: "1.8",
                        fontSize: "14px",
                        fontWeight: "500",
                        marginLeft:"284px",
                        marginTop:"150px"
                    }}
                    >
                    Overwhelmed by too many learning options?
                    SkillShikshya provides a clear, curated roadmap
                    from the start. Whether you're a beginner or
                    upskilling, we have a path tailored to your growth.
                </p>
            </>
            )}

            {hoverRed && (
                   <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#F45B5B",
                        borderRadius:"30px",
                        color: "white",
                        padding: "30px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        transition: "0.5s",
                    }}
                    >
                    <img src="/image/wow.png" style={{width:"100px",marginLeft:"50px",marginTop:"-110px",position:"absolute"}}></img>
                    <img src="/image/firstimage.png" style={{width:"300px",marginLeft:"50px",marginTop:"39px",position:"absolute"}}></img>
                    <img src="/image/move-left.png" style={{width:"90px",position:"absolute",marginLeft:"-35px",backgroundColor:"white",borderRadius: "0px 50px 50px 0px"}}></img>
                    <p style={{marginLeft:"320px",marginTop:"-120px",width:"160px",fontSize:"15px",wordSpacing:"5px",textAlign:"left"}}><strong>Clarity unlocked—stickers, sips, and skills all in one go!</strong></p>
                    <img src="/image/wow.png" style={{width:"100px",marginLeft:"350px",marginTop:"100px",position:"absolute"}}></img>
                     <img src="/image/arrow-right.png" style={{width:"90px",position:"absolute",marginLeft:"485px",backgroundColor:"white",borderRadius: "50px 0px 0px 50px"}}></img>
                    </div>
                 
            )}
        </div>


            {/* second container-blue */}
                <div
             
                style={{backgroundColor:"#6C64A8",width:"592px",height:"341px",borderRadius:"30px",marginTop:"30px",marginLeft:"117px",overflow:"hidden"}}>

                    <img src="/image/second.png" style={{marginLeft:"-80px",marginTop:"55px",position:"absolute",width:"350px"}}></img>
                    <h1 style={{marginTop:"80px",marginLeft:"210px",gap:"32px",position:"absolute",fontSize:"27px"}}><strong>Get Mentored & Supported</strong></h1>
                    <p style={{marginTop:"130px",marginLeft:"330px",gap:"32px",position:"absolute",fontSize:"20px"}}>You're not learning alone.</p>
                    <p
                        style={{
                            position:"absolute",
                            width: "288px",
                            height:"90px",
                            color: "white",
                            padding: "20px",
                            borderRadius: "4px",
                            textAlign: "right",
                            lineHeight: "1.8",
                            fontSize: "14px",
                            fontWeight: "500",
                            marginLeft:"284px",
                            marginTop:"150px",
                            font:"Outfit",
                            fontStyle:"Regular"
                        }}
                        >
                    Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.
                    </p>

               
            </div>

        {/* third conatiner-blue */}

         <div
            onMouseEnter={() => setHoverBlue(true)}
            onMouseLeave={() => setHoverBlue(false)} 
            style={{backgroundColor:"#5492A0",width:"592px",height:"341px",borderRadius:"30px",marginTop:"-711px",marginLeft:"740px",position:"absolute",overflow:"hidden",transition:"0.5s", transform: hoverBlue ? "translateX(-100px)" : "translateX(0px)"}}>
                

                {!hoverBlue && (
                <>
            <img src="/image/third.png" style={{width:"300px",height:"472px",marginLeft:"330px",position:"absolute",marginTop:"-20px"}}></img>
            <h1 style={{marginTop:"80px",marginLeft:"30px",gap:"32px",position:"absolute",fontSize:"27px"}}><strong>Learn by Doing</strong></h1>
            <p style={{marginTop:"130px",marginLeft:"30px",gap:"32px",position:"absolute",fontSize:"17px"}}><strong>Practical skills, real projects.</strong></p>

            <p
                style={{
                    position:"absolute",
                    width: "288px",
                    height:"90px",
                    color: "white",
                    padding: "20px",
                    borderRadius: "4px",
                    textAlign: "left",
                    lineHeight: "1.8",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft:"10px",
                    marginTop:"150px",
                    font:"Outfit",
                    fontStyle:"Regular"
                }}
                >
                Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.
            </p>
            </>
            )}
            
            {hoverBlue && (
                
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#5492A0",
                        borderRadius:"30px",
                        color: "white",
                        padding: "30px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        transition: "0.5s",
                    }}
                    >
                        <p style={{marginTop:"-200px",marginLeft:"50px",width:"190px",position:"absolute"}}><strong>Focused faces—learning mode: ON!</strong></p>
                        <img src="/image/move-left.png" style={{width:"90px",position:"absolute",marginLeft:"-30px",backgroundColor:"white",borderRadius: "0px 50px 50px 0px"}}></img>
                        <img src="/image/secondimage.png" style={{marginTop:"10px",position:"absolute",marginLeft:"-50px",filter:"drop-shadow(0 0 0 purple) drop-shadow(2px 0 0 purple) drop-shadow(-2px 0 0 purple) drop-shadow(0 2px 0 purple) drop-shadow(0 -2px 0 purple)"}}></img>
                        <img src="/image/arrow-right.png" style={{width:"90px",position:"absolute",marginLeft:"486px",backgroundColor:"white",borderRadius: "50px 0px 0px 50px",}}></img>
                    </div>

            )}
        </div>


        {/* fourth conatiner-brown */}

           <div style={{backgroundColor:"#A88964",width:"592px",height:"341px",borderRadius:"30px",marginTop:"-343px",marginLeft:"740px",position:"absolute",overflow:"hidden"}}>
            <img src="/image/fourth.png" style={{width:"400px",position:"absolute",marginLeft:"270px",marginTop:"10px"}}></img>
            <h1 style={{marginTop:"80px",marginLeft:"30px",gap:"32px",position:"absolute",fontSize:"27px"}}><strong>Achieve & Showcase</strong></h1>
            <p style={{marginTop:"120px",marginLeft:"30px",gap:"32px",position:"absolute",fontSize:"20px"}}>Build your portfolio, get job-ready.</p>

            <p
                style={{
                    position:"absolute",
                    width: "337px",
                    height:"90px",
                    color: "white",
                    padding: "20px",
                    borderRadius: "4px",
                    textAlign: "left",
                    lineHeight: "1.8",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft:"10px",
                    marginTop:"150px",
                    font:"Outfit",
                    fontStyle:"Regular"
                }}
                >
               Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.
            </p>
        </div>

    </div>

  )
}

export default Page;