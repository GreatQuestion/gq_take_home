import * as React from 'react';


interface Props {
    data: Incentive[];
}
export const IncentiveList: React.FC<Props> = ({ data }) => {

    const listIncentives = data.map((incentive) =>
        <tr>
            <td>{incentive.code}</td>
            <td>{incentive.redeemed ? "YES" : "NO"}</td>
        </tr>
    )
    return (
        <div>
            <div className="flex space-x-2 pb-4">
                <table style={{textAlign: "center", width: 300}}>
                    <th>Code</th>
                    <th>Redeemed?</th>
                    {listIncentives}
                </table>
            </div>
        </div>
    );
};
