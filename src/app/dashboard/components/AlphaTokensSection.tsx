import AlphaToken from "./AlphaToken";

const AlphaTokensSection: React.FC = () => {
  return (
    <div className="px-4 py-6 bg-black/80">
      <h2 className="text-white text-xl font-bold mb-4">Alpha tokens</h2>

      <div className="space-y-3">
        <AlphaToken
          name="ASTER"
          symbol="$2.81B"
          price="2.38"
          change={17.65}
          changePercent="17.65"
          icon={<div className="w-6 h-6 bg-orange-600 rounded-full"></div>}
        />

        <AlphaToken
          name="WOD"
          symbol="$1.96B"
          price="0.00"
          change={0}
          changePercent="0.00"
          icon={
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">D</span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default AlphaTokensSection;