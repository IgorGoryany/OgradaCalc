import { useShallow } from 'zustand/react/shallow';

import { useFence } from '@/shared/hooks/useFence/useFence';

import { PdfTotalDetailsList } from './Document';

export const LayoutPdfTotalDetailsList = () => {
  const detailsList = useFence(
    useShallow((state) => ({
      Frame25: state.Frame25,
      Frame20: state.Frame20,
      Pattern25: state.Pattern25,
      Pattern20: state.Pattern20,
      Pattern15: state.Pattern15,
    })),
  );

  return <PdfTotalDetailsList fenceValues={detailsList} />;
};
