'use client';
import React from 'react';
import Image from 'next/image';
import { MemberName, MemberImage } from '../types';
//[TO DO] Make the images using midjourney and happy/sad images using the like DSG styles
import platChatMinLogo from '../../public/images/platchat_min_logo.png';
import groupHappy from '../../public/images/platchatmembers/group/group_happy.png';
import groupSad from '../../public/images/platchatmembers/group/group_sad.png';
import aevilcatHappy from '../../public/images/platchatmembers/aevilcat/aevilcat_happy.png';
import aevilcatSad from '../../public/images/platchatmembers/aevilcat/aevilcat_sad.png';
import avastHappy from '../../public/images/platchatmembers/avast/avast_happy.png';
import avastSad from '../../public/images/platchatmembers/avast/avast_sad.png';
import ballaHappy from '../../public/images/platchatmembers/balla/balla_happy.png';
import ballaSad from '../../public/images/platchatmembers/balla/balla_sad.png';
import brenHappy from '../../public/images/platchatmembers/bren/bren_happy.png';
import brenSad from '../../public/images/platchatmembers/bren/bren_sad.png';
import sideshowHappy from '../../public/images/platchatmembers/sideshow/sideshow_happy.png';
import sideshowSad from '../../public/images/platchatmembers/sideshow/sideshow_sad.png';
import wyattHappy from '../../public/images/platchatmembers/wyatt/wyatt_happy.png';
import wyattSad from '../../public/images/platchatmembers/wyatt/wyatt_sad.png';
import { predictionTypeMapping } from '../helper/constants';

interface ProfileImageProps {
  name: string;
  successRate: string | number | null | undefined;
}

// [TO DO] Add photos for TMV and Sliggy!
const memberImages: Record<MemberName, MemberImage> = {
  Group: { happy: groupHappy, sad: groupSad },
  Aevilcat: { happy: aevilcatHappy, sad: aevilcatSad },
  Avast: { happy: avastHappy, sad: avastSad },
  Balla: { happy: ballaHappy, sad: ballaSad },
  Bren: { happy: brenHappy, sad: brenSad },
  Sideshow: { happy: sideshowHappy, sad: sideshowSad },
  Wyatt: { happy: wyattHappy, sad: wyattSad },
};

export default function ProfileImage({ name, successRate }: ProfileImageProps) {
  const filterImage = () => {
    const profile = memberImages[name as MemberName];
    if (!profile) {
      return platChatMinLogo;
    }
    if (successRate && parseFloat(successRate.toString()) >= 50) {
      return profile.happy;
    } else {
      return profile.sad;
    }
  };

  return (
    <Image
      src={filterImage()}
      alt="Bar Profile Image"
      className="rounded-3xl w-12"
      style={{
        animation: 'fadeIn 0.5s 3s forwards, tilt-shaking 1s steps(2) infinite',
        opacity: 0,
      }}
    />
  );
}
