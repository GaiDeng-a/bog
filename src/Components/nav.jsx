import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
	return (
		<div>
			<div className="flex items-center justify-between py-6 border-b border-[#004082]">
				<h1>Movadex Project</h1>
				<div className="flex items-center  gap-6">
					<div className="flex items-center gap-4">
						{" "}
						<div className="border p-1 border-[#004082] rounded-full">
							<PlusIcon className=" h-[22px] w-[22px] text-[#004082]" />
						</div>
						<span className="text-[#004082]">Add member</span>
					</div>
					<div>
						<div className="p-4 bg-yellow-400 rounded-full"></div>
					</div>
					<div className="w-[5px] h-[5px] border p-4 border-[#004082] rounded-full flex items-center justify-center">
						<span>5</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
