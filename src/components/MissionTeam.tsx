"use client";

import { useState } from "react";
import TeamMemberCard from "@/components/TeamMemberCard";
import TeamMemberModal, { type TeamMemberProfile } from "@/components/TeamMemberModal";

type Props = {
  team: TeamMemberProfile[];
};

export default function MissionTeam({ team }: Props) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const currentMember = modalIndex !== null ? team[modalIndex] ?? null : null;

  return (
    <>
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {team.map((member, index) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <TeamMemberModal
        isOpen={modalIndex !== null}
        onClose={closeModal}
        member={currentMember}
        allMembers={team}
        currentIndex={modalIndex ?? 0}
        onPrev={() => setModalIndex((i) => (i === null ? 0 : Math.max(0, i - 1)))}
        onNext={() =>
          setModalIndex((i) =>
            i === null ? 0 : Math.min(team.length - 1, i + 1)
          )
        }
      />
    </>
  );
}
