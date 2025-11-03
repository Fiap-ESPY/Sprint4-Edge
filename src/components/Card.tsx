type Props = {
    nameTeam1 : string, 
    nameTeam2: string, 
    goalsTeam1: number 
    goalsTeam2: number


}

const Card = ({nameTeam1, nameTeam2, goalsTeam1, goalsTeam2}: Props) => (
   <div className="min-w-[90%]  h-[280px] shadow-xl border-[0.5px] border-gray-400  rounded-2xl mt-10 bg-white  overflow-hidden">
      {/* Label superior */}
      <div className="bg-gray-500 w-[100px] h-[25px] flex justify-center items-center rounded-full mt-4 ml-4">
        <span className="text-white font-semibold text-base">Final</span>
      </div>

      {/* Container dos times */}
      <div className="mt-6 w-full h-[169px] flex flex-col items-center">
        <div className="w-[295px] h-[159px] flex justify-around items-center mb-6">
          {/* Time 1 */}
          <div className="flex flex-col justify-around items-center h-full">
            <div className="rounded-full bg-gray-300 w-20 h-20 flex items-center justify-center">
              <img src="/src/assets/psg-logo.png" alt="logo time" className="w-full" />
            </div>
            <span className="text-[12px] font-medium text-gray-400">
              {nameTeam1}
            </span>
          </div>

          {/* Placar */}
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-[32px] font-medium text-gray-800">{goalsTeam1 ?? 0} - {goalsTeam2 ?? 0}</span>
            <span className="text-[12px] font-medium text-gray-400 mt-1">
              Tempo normal
            </span>
          </div>

          {/* Time 2 */}
          <div className="flex flex-col justify-around items-center h-full">
            <div className="rounded-full bg-gray-300 w-20 h-20 flex items-center justify-center">
              <img src="/src/assets/barcelona-logo.png" alt="logo time" className="w-full" />
            </div>
            <span className="text-[12px] font-medium text-gray-400">
              {nameTeam2}
            </span>
          </div>
        </div>
      </div>
    </div>
)

export default Card