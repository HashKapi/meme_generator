const Header = () => {
    return ( 
        <header>
            <nav className="navbar" style={{backgroundColor:'orange'}}>
                <div className="container-fluid">
                    <div className="navbar-brand text-center">
                        <img 
                            src="assets/shiba.jpeg" 
                            alt="Shiba inu"  
                            className='rounded float-start me-3'
                            width={100}
                            height={100}
                        />
                
                        <h2 className='p-4'>Meme generator</h2>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;