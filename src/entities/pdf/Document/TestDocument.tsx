import type { DocumentProps } from '@react-pdf/renderer';
import { Page, Document } from '@react-pdf/renderer';

import type { FenceValues } from '@/shared/helpers';

import { FenceList } from '../FenceList';

type MyDocumentProps = DocumentProps & {
  fenceValues: FenceValues[];
};

// Create Document Component
export const MyDocument = (props: MyDocumentProps) => {
  const { pageMode = 'fullScreen', fenceValues } = props;

  return (
    <Document
      author="Xiaomi"
      creationDate={new Date()}
      pageMode={pageMode}
      {...props}
    >
      <Page size="A4">
        <FenceList fenceValues={fenceValues} />
      </Page>
    </Document>
  );
};
