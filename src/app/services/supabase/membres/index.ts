import { supabase } from 'src/app/config';
import { Member, MemberResponse } from 'src/app/models/members';

export const getMembresSupabase = async () => {
  const { data, error } = await supabase.from('membres').select('*');

  if (error) {
    console.log(error);
    return [];
  } else {
    const members: Member[] = data.map(
      (member: MemberResponse) => new Member(member)
    );
    return members;
  }
};

export const deleteMemberSupabase = async (id: number) => {
  try {
    const { error } = await supabase
      .from('membres')
      .delete()
      .eq('id_membre', id);
    if (error) console.log(error);
  } catch (error) {
    console.error('Error deleting member:', error);
  }
};
