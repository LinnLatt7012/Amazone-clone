import { getProviders, signIn as signIntoProvider} from "next-auth/react"
function signIn({ providers }) {
  // console.log(providers);
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center bg-gray-500 ">
          <img className="w-80" 
          src="https://links.papareact.com/f90"
          alt="" />
          <p className="font-xs italic">
           This is not a REAL app, it is built for eductional purposes only  
          </p>
          <div className="mt-40"> 
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIntoProvider(provider.id,{callbackUrl:'/'})}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
    </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }

export default signIn
