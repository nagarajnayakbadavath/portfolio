const Body=()=>{
    return(
        <div className="flex justify-center m-20">
            <div className="">
            <table className="">
                <tr>
                    <td>
                        <div className="">
                        <img className="w-[200px] h-[200px] rounded-lg" alt="myphoto" src="https://avatars.githubusercontent.com/u/192697405?v=4"/>
                        </div>
                    </td>

                    <td>
                        <div className="flex">
                            <h1 className="m-2 font-black">Hello,</h1>
                            <h2 className="font-black m-2 animate-typing">I'm</h2>
                        </div>
                            <div>  
                                <h1 className="m-2 font-black">Nagaraju Badavath</h1>
                                <h2 className="m-2 font-black animate-typing">Full Stack Developer</h2>
                            </div>
                    </td>
                </tr>
            </table>
            </div>
        </div>
    )
};

export default Body;