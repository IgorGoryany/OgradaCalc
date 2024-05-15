import type { DocumentProps } from '@react-pdf/renderer';
import {
  Page,
  PDFViewer,
  Document,
  View,
  StyleSheet,
  Text,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  view: {
    width: '100%',
  },
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 100,
  },
  subView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    textDecoration: 'underline',
  },
});

interface PdfTotalDetailsListProps {
  fenceValues: {
    Frame25: [number, number][];
    Frame20: [number, number][];
    Pattern25: [number, number][];
    Pattern20: [number, number][];
    Pattern15: [number, number][];
  };
}

export const PdfTotalDetailsList = (
  props: DocumentProps & PdfTotalDetailsListProps,
) => {
  const { fenceValues } = props;
  console.log(fenceValues);

  const { Frame20, Frame25, Pattern20, Pattern25, Pattern15 } = fenceValues;

  return (
    <PDFViewer style={{ width: '100%', height: '100vh', marginTop: 20 }}>
      <Document
        author="Xiaomi"
        creationDate={new Date()}
        language="ru"
        {...props}
      >
        <Page size="A4" style={styles.page}>
          <View style={styles.mainView}>
            <View style={styles.view}>
              <Text style={styles.title}>Karkas</Text>
              <View style={styles.subView}>
                <View>
                  <Text style={styles.text}>25 X 25</Text>
                  {Frame25.map(([length, count]) => (
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    <Text>
                      {length} X {count}
                    </Text>
                  ))}
                </View>
                <View>
                  <Text style={styles.text}>20 X 20</Text>
                  {Frame20.map(([length, count]) => (
                    <Text>
                      {length} X {count}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
            <View style={styles.view}>
              <View>
                <Text style={styles.title}>Risunok</Text>
                <View style={styles.subView}>
                  <View>
                    <Text style={styles.text}>25 X 25</Text>
                    {Pattern25.map(([length, count]) => (
                      <Text>
                        {length} X {count}
                      </Text>
                    ))}
                  </View>
                  <View>
                    <Text style={styles.text}>20 X 20</Text>
                    {Pattern20.map(([length, count]) => (
                      <Text>
                        {length} X {count}
                      </Text>
                    ))}
                  </View>
                  <View>
                    <Text style={styles.text}>15 X 15</Text>
                    {Pattern15.map(([length, count]) => (
                      <Text>
                        {length} X {count}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
