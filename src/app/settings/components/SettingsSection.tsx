interface SettingsSectionProps {
  children: React.ReactNode;
  showDivider?: boolean;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  children,
  showDivider = false,
}) => (
  <>
    <div className="space-y-0">{children}</div>
    {showDivider && <div className="border-t border-gray-700 my-6" />}
  </>
);

export default SettingsSection;