import { DownloadSVG } from '@/shared/img/RFCIcon/DownloadSVG';
import { Button, HStack, VStack } from '@/shared/ui';

import style from './PdfActions.module.scss';


type PdfActionsProps = {
  isMobile: boolean;
  onShowPdf: () => void;
  onShowTotalDetailsList: () => void

}
export const PdfActions = (props: PdfActionsProps) => {
  const {isMobile, onShowPdf, onShowTotalDetailsList} = props;

  const Layout = isMobile ? VStack : HStack;
  return (
    <Layout gap='8'>
      <Button
        className={style.pdfButton}
        rightIcon={<DownloadSVG />}
        variant="secondGray"
        onClick={onShowTotalDetailsList}
      >
        резать
      </Button>
      <Button
        className={style.pdfButton}
        rightIcon={<DownloadSVG />}
        variant="secondGray"
        onClick={onShowPdf}
      >
        варить
      </Button>
    </Layout>
  );
};
