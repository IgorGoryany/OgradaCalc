import { memo, useCallback, useContext } from 'react';

import {
  Fence15And25,
  Fence35,
  Fence5,
  FenceLayout,
  FrameFence,
  SimpleFence,
} from '@/entities/Fence';
import {
  FenceContext,
  choosingImage,
  distributionLogic,
} from '@/shared/helpers';

interface FenceListProps {
  isMobile: boolean;
}

export const FenceList = memo(function FenceList(props: FenceListProps) {
  const { isMobile } = props;
  const { fenceValues, setFenceValues } = useContext(FenceContext);

  const onDelete = useCallback(
    (id: number) => {
      setFenceValues?.(fenceValues.filter((fence) => fence.id !== id));
    },
    [fenceValues, setFenceValues],
  );

  const fences = fenceValues.map((fence, index) => {
    const image = choosingImage(fence.sizeX, fence.sizeY);
    const fenceSizes = distributionLogic(
      fence.fenceModel,
      fence.sizeX,
      fence.sizeY,
    );

    if (fenceSizes.fenceVariant === 'ModelSimple' && fence.fenceModel === 5) {
      return (
        <FenceLayout
          key={fence.id}
          id={fence.id}
          image={image}
          isLeft={fence.isLeft}
          isMobile={isMobile}
          lengthX={fence.sizeX}
          lengthY={fence.sizeY}
          model={fence.fenceModel}
          number={index + 1}
          onDelete={onDelete}
        >
          <Fence5 {...fenceSizes} />
        </FenceLayout>
      );
    }

    if (fenceSizes.fenceVariant === 'ModelSimple') {
      return (
        <FenceLayout
          key={fence.id}
          id={fence.id}
          image={image}
          isLeft={fence.isLeft}
          isMobile={isMobile}
          lengthX={fence.sizeX}
          lengthY={fence.sizeY}
          model={fence.fenceModel}
          number={index + 1}
          onDelete={onDelete}
        >
          <SimpleFence {...fenceSizes} />
        </FenceLayout>
      );
    }
    if (fenceSizes.fenceVariant === 'Model35') {
      return (
        <FenceLayout
          key={fence.id}
          id={fence.id}
          image={image}
          isLeft={fence.isLeft}
          isMobile={isMobile}
          lengthX={fence.sizeX}
          lengthY={fence.sizeY}
          model={fence.fenceModel}
          number={index + 1}
          onDelete={onDelete}
        >
          <Fence35 {...fenceSizes} />
        </FenceLayout>
      );
    }
    if (fenceSizes.fenceVariant === 'Model15And25') {
      return (
        <FenceLayout
          key={fence.id}
          id={fence.id}
          image={image}
          isLeft={fence.isLeft}
          isMobile={isMobile}
          lengthX={fence.sizeX}
          lengthY={fence.sizeY}
          model={fence.fenceModel}
          number={index + 1}
          onDelete={onDelete}
        >
          <Fence15And25 {...fenceSizes} />
        </FenceLayout>
      );
    }
    return (
      <FenceLayout
        key={fence.id}
        id={fence.id}
        image={image}
        isLeft={fence.isLeft}
        isMobile={isMobile}
        lengthX={fence.sizeX}
        lengthY={fence.sizeY}
        model={fence.fenceModel}
        number={index + 1}
        onDelete={onDelete}
      >
        <FrameFence {...fenceSizes} />
      </FenceLayout>
    );
  });

  fences.reverse();

  return <div id="result">{fences}</div>;
});
