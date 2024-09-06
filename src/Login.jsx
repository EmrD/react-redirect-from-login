function Login (){

    const handleRedirect = () => {
        const redirect = window.location.search.split("=")[1];
        window.location.href = `/${redirect}?login=true`;
    }

    return(
        <>
        <div>
            Login page
        </div>
        <button onClick={handleRedirect}>
            Login In 
        </button>
        </>
    )
}

export default Login;