import { PDFViewer } from '@react-pdf/renderer';
import { useContext } from 'react';

import { FenceContext } from '@/shared/helpers';

import { MyDocument } from './TestDocument';

export const PdfDocument = () => {
  const { fenceValues } = useContext(FenceContext);

  return (
    <PDFViewer style={{ width: '100%', height: '100vh', marginTop: 20 }}>
      <MyDocument fenceValues={fenceValues} />
    </PDFViewer>
  );
};
