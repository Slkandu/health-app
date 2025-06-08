// app/review.tsx
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useFormData } from '../hooks/useFormData';  // update the path as needed

export default function ReviewScreen() {
  const { personal, lifestyle, habits, medical } = useFormData();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Review Your Info</Text>

      <Section title="Personal Information">
        <Field label="Name" value={personal.name} />
        <Field label="DOB"   value={personal.dob} />
        <Field label="Gender"    value={personal.gender} />
        {/* …etc */}
      </Section>

      <Section title="Anthropometrics & Lifestyle">
        <Field label="Height" value={`${lifestyle.height} cm`} />
        <Field label="Bedtime"  value={lifestyle.bedtime} />
        {/* …etc */}
      </Section>

      <Section title="Habits">
        <Field label="Smoking" value={habits.smoking} />
        <Field label="Alcohol" value={habits.alcohol} />
        {/* …etc */}
      </Section>

      <Section title="Medical History">
        <Field label="Diagnosed Conditions" value={medical.conditions.join(', ')} />
        <Field label="Medications"           value={medical.meds || '—'} />
        {/* …etc */}
      </Section>
    </ScrollView>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Text style={styles.fieldValue}>{value || '—'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  heading:   { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  section:   { marginBottom: 24 },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  field:     { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  fieldLabel: { fontWeight: '500' },
  fieldValue: { },
});
