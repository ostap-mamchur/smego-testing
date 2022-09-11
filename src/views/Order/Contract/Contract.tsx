import { FormTemplate } from "../FormTemplate/FormTemplate";
import { ContractText } from "./Contract.style";

interface ContractProps {
  moveToPreviousPage: () => void;
}

export const Contract: React.FC<ContractProps> = ({ moveToPreviousPage }) => {
  return (
    <FormTemplate moveToPreviousPage={moveToPreviousPage} title="Contact person">
      <ContractText sx={{ maxHeight: "60vh", overflow: "auto" }}>
        I hereby agree that all data submitted herein regarding the company I
        represent along with my submitted personal data shall be used for direct
        marketing purposes with the aim of sending business financing proposals
        targeted and tailored to the aforementioned represented company, by UAB
        SME Finance, UAB SME Finance Leasing and UAB SME Bank.
        <br />
        <br />
        I hereby agree that all data submitted herein regarding the company I
        represent along with my submitted personal data shall be used for direct
        marketing purposes with the aim of sending business financing proposals
        targeted and tailored to the aforementioned represented company, by UAB
        SME Finance, UAB SME Finance Leasing and UAB SME Bank.
        <br />
        <br />
        I hereby agree that all data submitted herein regarding the company I
        represent along with my submitted personal data shall be used for direct
        marketing purposes with the aim of sending business financing proposals
        targeted and tailored to the aforementioned represented company, by UAB
        SME Finance, UAB SME Finance Leasing and UAB SME Bank.
        <br />
        <br />
        I hereby agree that all data submitted herein regarding the company I
        represent along with my submitted personal data shall be used for direct
        marketing purposes with the aim of sending business financing proposals
        targeted and tailored to the aforementioned represented company, by UAB
        SME Finance, UAB SME Finance Leasing and UAB SME Bank.
        <br />
        <br />
        I hereby agree that all data submitted herein regarding the company I
        represent along with my submitted personal data shall be used for direct
        marketing purposes with the aim of sending business financing proposals
        targeted and tailored to the aforementioned represented company, by UAB
        SME Finance, UAB SME Finance Leasing and UAB SME Bank.
        <br />
        <br />
        I hereby agree that all data submitted herein regarding the company I
        represent along with my submitted personal data shall be used for direct
        marketing purposes with the aim of sending business financing proposals
        targeted and tailored to the aforementioned represented company, by UAB
        SME Finance, UAB SME Finance Leasing and UAB SME Bank.
        <br />
        <br />
        I hereby agree that all data submitted herein regarding the company I
        represent along with my submitted personal data shall be used for direct
        marketing purposes with the aim of sending business financing proposals
        targeted and tailored to the aforementioned represented company, by UAB
        SME Finance, UAB SME Finance Leasing and UAB SME Bank.
        <br />
        <br />I hereby agree that all data submitted herein regarding the
        company I represent along with my submitted personal data shall be used
        for direct marketing purposes with the aim of sending business financing
        proposals targeted and tailored to the aforementioned represented
        company, by UAB SME Finance, UAB SME Finance Leasing and UAB SME Bank.
      </ContractText>
    </FormTemplate>
  );
};
