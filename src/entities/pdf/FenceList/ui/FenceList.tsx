import type { AllFenceSizes, FenceModels, FenceValues } from '@/shared/helpers';
import { distributionLogic } from '@/shared/helpers';
import { choosingImageForPDF } from '@/shared/helpers/support/choosingImageForPDF';

import {
  Fence15And25,
  Fence35,
  Fence5,
  FrameFence,
  SimpleFence,
} from '../../Fence';
import { FenceLayoutPdf } from '../../FenceLayout/ui/FenceLayout';

interface FenceListProps {
  fenceValues: FenceValues[];
}

export const FenceList = (props: FenceListProps) => {
  const { fenceValues } = props;

  const getFenceComponent = (
    fenceSizes: AllFenceSizes,
    fenceModel: FenceModels,
  ) => {
    if (fenceModel === 5 && fenceSizes.fenceVariant === 'ModelSimple') {
      return <Fence5 {...fenceSizes} />;
    }
    switch (fenceSizes.fenceVariant) {
      case 'ModelSimple':
        return <SimpleFence {...fenceSizes} />;
      case 'Model35':
        return <Fence35 {...fenceSizes} />;
      case 'Model15And25':
        return <Fence15And25 {...fenceSizes} />;
      default:
        return <FrameFence {...fenceSizes} />;
    }
  };

  const renderFence = (fence: FenceValues) => {
    const { sizeX, sizeY, isLeft, fenceModel, id } = fence;
    const image = choosingImageForPDF(sizeX, sizeY, isLeft);
    const fenceSizes = distributionLogic(fenceModel, sizeX, sizeY);
    return (
      <FenceLayoutPdf
        key={id}
        image={image}
        isLeft={isLeft}
        lengthX={sizeX}
        lengthY={sizeY}
        model={fenceModel}
      >
        {getFenceComponent(fenceSizes, fenceModel)}
      </FenceLayoutPdf>
    );
  };

  const fences = fenceValues.map(renderFence);

  return <div id="result">{fences}</div>;
};
