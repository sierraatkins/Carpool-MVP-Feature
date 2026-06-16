import type { Match } from "./sample_carpool_data.ts";

// declare expected property types
interface Props {
  match: Match;
  onApprove: () => void;
  onReject: () => void;
}

// Displays the current match information with approve and reject buttons
export default function CarpoolMatch({match, onApprove, onReject}: Props) {
  return (
    <div className="max-w-md">
      <h1 className="text-center text-2xl font-bold">
        Carpool Match
      </h1>

      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p>{match.firstName} {match.lastName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Employer</p>
          <p>{match.employer}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Start Location</p>
          <p>{match.startLocation}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">End Location</p>
          <p>{match.endLocation}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Distance from Your Start Point
          </p>
          <p>{match.startDistanceDelta} miles</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Distance from Your End Point
          </p>
          <p>{match.endDistanceDelta} miles</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-6">
        <button
          onClick={onReject}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl hover:bg-red-200"
        >
          👎
        </button>

        <button
          onClick={onApprove}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl hover:bg-green-200"
        >
          👍
        </button>
      </div>
    </div>
  );
}
