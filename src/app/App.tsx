import { useCallback, useState } from 'react';

import { PdfDocument } from '@/entities/pdf';
import { CalcForm } from '@/features/CalcForm';
import { LayoutPdfTotalDetailsList } from '@/features/PdfTotalDetailsList/ui/Document/Layout';
import { TotalDetailsList } from '@/features/TotalDetailsList';
import { cn } from '@/shared/helpers';
import { useMobile } from '@/shared/hooks/useMobile/useMobile';
import { BackSVG } from '@/shared/img/RFCIcon/BackSVG';
import { DownloadSVG } from '@/shared/img/RFCIcon/DownloadSVG';
import { Button, Container, HStack, Heading } from '@/shared/ui';
import { FenceList } from '@/widgets/FenceList';
import { Footer } from '@/widgets/Footer';

import style from './styles/App.module.scss';

const App = () => {
  const [isPdfVisible, setIsPdfVisible] = useState(false);
  const [isPdfTotalVisible, setIsPdfTotalVisible] = useState(false);
  const [isTotalDetailsListVisible, setIsTotalDetailsListVisible] =
    useState(false);

  const toggleDetailsListVisibility = useCallback(() => {
    setIsTotalDetailsListVisible((prev) => !prev);
  }, []);

  const onHidePdf = useCallback(() => {
    setIsPdfVisible(false);
    setIsPdfTotalVisible(false);
  }, []);

  const onShowTotalDetailsList = useCallback(() => {
    setIsPdfTotalVisible(true);
  }, []);

  const onShowPdf = useCallback(() => {
    setIsPdfVisible(true);
  }, []);

  const isMobile = useMobile();

  return (
    <>
      {isPdfVisible && (
        <Container center>
          <Button
            className={style.pdfButton}
            rightIcon={<BackSVG className={style.back} />}
            variant="secondGray"
            onClick={onHidePdf}
          />
          <PdfDocument />
        </Container>
      )}
      {isPdfTotalVisible && (
        <Container center>
          <Button
            className={style.pdfButton}
            rightIcon={<BackSVG className={style.back} />}
            variant="secondGray"
            onClick={onHidePdf}
          />
          <LayoutPdfTotalDetailsList />
        </Container>
      )}
      <Container
        center
        className={cn(style.container, { [style.invisible]: isPdfVisible })}
      >
        <HStack max align="center" gap="32" justify="between">
          <Heading like="h1" Tag="h1">
            Расчет размера заготовок
          </Heading>
          <HStack align="center" gap="8" justify="end">
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
          </HStack>
        </HStack>

        <CalcForm
          isMobile={isMobile}
          isTotalDetailsListVisible={isTotalDetailsListVisible}
          toggleVisibility={toggleDetailsListVisibility}
        />
        {isTotalDetailsListVisible && <TotalDetailsList isMobile={isMobile} />}

        <FenceList isMobile={isMobile} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
