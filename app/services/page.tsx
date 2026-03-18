import ServicesComponent from "../services_component";

export default function Services() {
  return (
    <>
      <div className="flex flex-row gap-4 p-8 text-left max-w-full min-h-9/10">
        <div>
          <h1 className="text-8xl md:pl-16 text-white lowercase w-full right-0 inline-block font-halfre px-6 py-4">
            Usługi
          </h1>
        </div>

        <div className="relative w-155 h-65 max-w-1/2">
          <div
            className="absolute 
                  w-50 h-50
                  rounded-full
                  bg-linear-[230deg] from-[#EA5629] via-[#EA6851] to-[#EA96B4]
                  left-15 top-15 md:z-2"
          />
          <div
            className="absolute 
                  w-110 h-110
                  rounded-full
                  border-2 border-white/90
                  right-0 top-2 md:z-1"
          />
        </div>
        <div
          className="absolute 
                  w-40 h-40
                  rounded-full
                  border-2 border-white/90
                  right-30 top-30 md:z-1"
        />
      </div>
      <ServicesComponent />
    </>
  );
}
