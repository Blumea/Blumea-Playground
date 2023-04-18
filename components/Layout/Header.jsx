import Image from "next/image"

const Header = () => {
  return (
      <div className="flex">
          <div className="flex items-center w-full gap-2 drop-shadow-lg border py-3 px-4">
              <Image src="/images/Logo-green.png" width={30} height={30} />
              <span className="font-inter text-xl font-semibold">Playground</span>
          </div>
    </div>
  )
}

export default Header