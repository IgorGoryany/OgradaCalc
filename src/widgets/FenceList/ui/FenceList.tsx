import { memo, useCallback, useContext } from 'react';

import {
  Fence15And25,
  Fence35,
  Fence5,
  FenceLayout,
  FrameFence,
  SimpleFence,
} from '@/entities/Fence';
import type { AllFenceSizes, FenceModels, FenceValues } from '@/shared/helpers';
import {
  FenceContext,
  choosingImage,
  distributionLogic,
} from '@/shared/helpers';

interface FenceListProps {
  isMobile: boolean;
}

export const FenceListComponent = (props: FenceListProps) => {
  const { isMobile } = props;
  const { fenceValues, setFenceValues } = useContext(FenceContext);

  const onDelete = useCallback(
    (id: number) => {
      setFenceValues?.(fenceValues.filter((fence) => fence.id !== id));
    },
    [fenceValues, setFenceValues],
  );

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

  const renderFence = (fence: FenceValues, index: number) => {
    const { sizeX, sizeY, isLeft, fenceModel, id } = fence;
    const image = choosingImage(sizeX, sizeY);
    const fenceSizes = distributionLogic(fenceModel, sizeX, sizeY);
    return (
      <FenceLayout
        key={id}
        id={id}
        image={image}
        isLeft={isLeft}
        isMobile={isMobile}
        lengthX={sizeX}
        lengthY={sizeY}
        model={fenceModel}
        number={index + 1}
        onDelete={onDelete}
      >
        {getFenceComponent(fenceSizes, fenceModel)}
      </FenceLayout>
    );
  };

  const fences = fenceValues.map(renderFence);

  fences.reverse();

  return <div id="result">{fences}</div>;
};

export const FenceList = memo(FenceListComponent);
