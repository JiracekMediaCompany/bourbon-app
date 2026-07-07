export function Scoreboard() {
  const scoreboardData = [
    { id: 1, username: 'BourbonMaster', score: 3250, ranking: 1 },
    { id: 2, username: 'WhiskeySipper', score: 3120, ranking: 2 },
    { id: 3, username: 'SmoothTaste', score: 2980, ranking: 3 },
    { id: 4, username: 'RyeEnthusiast', score: 2845, ranking: 4 },
    { id: 5, username: 'BarrelAged', score: 2710, ranking: 5 },
    { id: 6, username: 'TasteExplorer', score: 2595, ranking: 6 },
    { id: 7, username: 'SmoothFinish', score: 2460, ranking: 7 },
    { id: 8, username: 'PremiumChoice', score: 2335, ranking: 8 },
    { id: 9, username: 'SpiritSeeker', score: 2210, ranking: 9 },
    { id: 10, username: 'CaskCurator', score: 2085, ranking: 10 },
    { id: 11, username: 'NobleNectar', score: 1960, ranking: 11 },
    { id: 12, username: 'GoldenPotion', score: 1845, ranking: 12 },
    { id: 13, username: 'RichRipple', score: 1720, ranking: 13 },
    { id: 14, username: 'VelvetVintage', score: 1605, ranking: 14 },
    { id: 15, username: 'AmberAficionado', score: 1480, ranking: 15 },
    { id: 16, username: 'TimelessTaste', score: 1365, ranking: 16 },
    { id: 17, username: 'ConnoisseurClub', score: 1240, ranking: 17 },
    { id: 18, username: 'DarkDistilled', score: 1125, ranking: 18 },
    { id: 19, username: 'LegendaryLiquid', score: 1000, ranking: 19 },
    { id: 20, username: 'ToastMaster', score: 895, ranking: 20 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Rankings</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow">
          <thead className="bg-amber-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Ranking</th>
              <th className="px-6 py-3 text-left font-semibold">Username</th>
              <th className="px-6 py-3 text-left font-semibold">Score</th>
            </tr>
          </thead>
          <tbody>
            {scoreboardData.map((entry) => (
              <tr
                key={entry.id}
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  entry.ranking <= 3 ? 'bg-amber-50' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                      entry.ranking === 1
                        ? 'bg-yellow-400 text-yellow-900'
                        : entry.ranking === 2
                        ? 'bg-gray-300 text-gray-800'
                        : entry.ranking === 3
                        ? 'bg-orange-400 text-orange-900'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {entry.ranking}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">{entry.username}</td>
                <td className="px-6 py-4 text-gray-700 font-semibold">{entry.score.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
