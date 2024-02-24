import { useCallback, useState } from 'react';

import { PdfDocument } from '@/entities/pdf';
import { CalcForm } from '@/features/CalcForm';
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
  const [isTotalDetailsListVisible, setIsTotalDetailsListVisible] =
    useState(false);

  const toggleDetailsListVisibility = useCallback(() => {
    setIsTotalDetailsListVisible((prev) => !prev);
  }, []);

  const onHidePdf = useCallback(() => {
    setIsPdfVisible(false);
  }, []);

  const onShowPdf = useCallback(() => {
    setIsPdfVisible(true);
  }, []);

  const isMobile = useMobile();

  if (isPdfVisible) {
    return (
      <Container center>
        <Button
          className={style.pdfButton}
          rightIcon={<BackSVG className={style.back} />}
          variant="secondGray"
          onClick={onHidePdf}
        />
        <PdfDocument />
      </Container>
    );
  }

  return (
    <>
      <Container center className={cn(style.container)}>
        <HStack max align="center" gap="32" justify="between">
          <Heading like="h1" Tag="h1">
            Расчет размера заготовок
          </Heading>
          <Button
            className={style.pdfButton}
            rightIcon={<DownloadSVG />}
            variant="secondGray"
            onClick={onShowPdf}
          >
            pdf
          </Button>
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
