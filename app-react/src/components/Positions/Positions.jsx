import { usePositions } from "../../hooks/usePosition";
import { useCandidate } from "../../hooks/useCandidate";
import { createApplication } from "../../api/applications.api";
import PositionItem from "./PositionItem";

export default function Positions() {
  const { positions, loading: loadingPositions } = usePositions();
  const { candidate, loading: loadingCandidate } = useCandidate();

  if(loadingPositions || loadingCandidate) {
    return <h1>Loading...</h1>
  }

  const handleApply = async (e, positionId) => {
    e.preventDefault();
    const repoUrl = e.currentTarget.repoUrl.value;

    if (!repoUrl) {
      alert('Tenés que ingresar el repo de GitHub');
      return;
    }

    try{
      await createApplication({
        uuid: candidate.uuid,
        jobId: positionId,
        candidateId: candidate.candidateId,
        repoUrl: repoUrl,
      })
      alert('Postulacion enviada')
    }
    catch(error){
      alert('Error al enviar la postulacion', error);
    }
  }

  return (
        <section className="max-w-2xl mx-auto mt-10 px-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">
            Position List
        </h1>

        <ul className="space-y-4">
            {positions.map((p) => (
                <PositionItem position={p} onSubmit={handleApply} />
            ))}
        </ul>
        </section>
  );
}

