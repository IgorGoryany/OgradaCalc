import type { FenceValues } from '@/shared/helpers';
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

  const fences = fenceValues.map((fence) => {
    const image = choosingImageForPDF(fence.sizeX, fence.sizeY, fence.isLeft);
    const fenceSizes = distributionLogic(
      fence.fenceModel,
      fence.sizeX,
      fence.sizeY,
    );

    if (fenceSizes.fenceVariant === 'ModelSimple' && fence.fenceModel === 5) {
      return (
        <FenceLayoutPdf
          key={fence.id}
          image={image}
          isLeft={fence.isLeft}
          lengthX={fence.sizeX}
          lengthY={fence.sizeY}
          model={fence.fenceModel}
        >
          <Fence5 {...fenceSizes} />
        </FenceLayoutPdf>
      );
    }

    if (fenceSizes.fenceVariant === 'ModelSimple') {
      return (
        <FenceLayoutPdf
          key={fence.id}
          image={image}
          isLeft={fence.isLeft}
          lengthX={fence.sizeX}
          lengthY={fence.sizeY}
          model={fence.fenceModel}
        >
          <SimpleFence {...fenceSizes} />
        </FenceLayoutPdf>
      );
    }
    if (fenceSizes.fenceVariant === 'Model35') {
      return (
        <FenceLayoutPdf
          key={fence.id}
          image={image}
          isLeft={fence.isLeft}
          lengthX={fence.sizeX}
          lengthY={fence.sizeY}
          model={fence.fenceModel}
        >
          <Fence35 {...fenceSizes} />
        </FenceLayoutPdf>
      );
    }
    if (fenceSizes.fenceVariant === 'Model15And25') {
      return (
        <FenceLayoutPdf
          key={fence.id}
          image={image}
          isLeft={fence.isLeft}
          lengthX={fence.sizeX}
          lengthY={fence.sizeY}
          model={fence.fenceModel}
        >
          <Fence15And25 {...fenceSizes} />
        </FenceLayoutPdf>
      );
    }
    return (
      <FenceLayoutPdf
        key={fence.id}
        image={image}
        isLeft={fence.isLeft}
        lengthX={fence.sizeX}
        lengthY={fence.sizeY}
        model={fence.fenceModel}
      >
        <FrameFence {...fenceSizes} />
      </FenceLayoutPdf>
    );
  });

  return <div id="result">{fences}</div>;
};
