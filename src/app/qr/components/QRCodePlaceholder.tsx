import { qr_code } from "@/utils/image";
import Image from "next/image";

const QRCodePlaceholder: React.FC<{ address: string }> = ({ address }) => (
  <div className="bg-white rounded-2xl p-6 flex flex-col items-center">
    {/* QR Code Pattern */}
    <div className="w-64 h-64 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-4 relative">
      <Image src={qr_code} alt="" className="w-full h-full" />
    </div>

    {/* Address */}
    <div className="text-center">
      <p className="text-black font-mono text-sm break-all max-w-xs leading-tight">
        {address}
      </p>
    </div>
  </div>
);

export default QRCodePlaceholder;